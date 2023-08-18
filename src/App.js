import React from "react";
import Header from "./components/header";
import FeaturesSection from "./components/FeaturesSection";
import SubscriptionForm from "./components/subscriptionForm";



function App() {
  return (
    <div className="bg-[#00BBF9] flex flex-col items-center">
      <Header />
      <FeaturesSection />
      <SubscriptionForm />
    </div>
  );
}

export default App;
