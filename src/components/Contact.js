import React from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {
    const { loggedInUser } = useContext(UserContext);
    return (
      <div className="bg-gray-100 p-6">
        <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
        <form action="#" method="POST">
            <div class="mb-4">
                <label for="name" class="block text-gray-600">Name</label>
                <input type="text" id="name" name="name" class="w-full p-2 border rounded-md" />
            </div>
            <div class="mb-4">
                <label for="message" class="block text-gray-600">Message</label>
                <textarea id="message" name="message" rows="4" class="w-full p-2 border rounded-md"></textarea>
            </div>
            <div class="text-center">
                <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
            </div>
        </form>
    </div>
        

      
      </div>
    );
}

export default Contact;