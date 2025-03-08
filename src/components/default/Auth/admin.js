import { db, storage } from "./Firebaseirebase";
import { collection, doc, getDocs, updateDoc, deleteDoc, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

// Bookings Management
export const adminBookings = {
  getAllBookings: async () => {
    const querySnapshot = await getDocs(collection(db, "bookings"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  updateBookingStatus: async (bookingId, newStatus) => {
    await updateDoc(doc(db, "bookings", bookingId), { status: newStatus });
  },

  deleteBooking: async (bookingId) => {
    await deleteDoc(doc(db, "bookings", bookingId));
  }
};

// Cars Management
export const adminCars = {
  getAllCars: async () => {
    const querySnapshot = await getDocs(collection(db, "cars"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  addCar: async (carData, imageFile) => {
    // Upload image to Firebase Storage
    const storageRef = ref(storage, `cars/${Date.now()}_${imageFile.name}`);
    await uploadBytes(storageRef, imageFile);
    const imageUrl = await getDownloadURL(storageRef);

    // Add car document to Firestore
    const docRef = await addDoc(collection(db, "cars"), {
      ...carData,
      imageUrl,
      createdAt: new Date()
    });
    
    return { id: docRef.id, ...carData, imageUrl };
  },

  updateCar: async (carId, updatedData, newImageFile) => {
    const carRef = doc(db, "cars", carId);
    
    if(newImageFile) {
      // Upload new image
      const storageRef = ref(storage, `cars/${Date.now()}_${newImageFile.name}`);
      await uploadBytes(storageRef, newImageFile);
      updatedData.imageUrl = await getDownloadURL(storageRef);
    }

    await updateDoc(carRef, updatedData);
    return { id: carId, ...updatedData };
  },

  deleteCar: async (carId) => {
    // First delete the image from storage
    const carDoc = await getDoc(doc(db, "cars", carId));
    const imageUrl = carDoc.data().imageUrl;
    const imageRef = ref(storage, imageUrl);
    await deleteObject(imageRef);

    // Then delete the document
    await deleteDoc(doc(db, "cars", carId));
  }
};

// Admin Authentication
export const verifyAdmin = async (user) => {
  const idTokenResult = await user.getIdTokenResult();
  return !!idTokenResult.claims.admin;
};