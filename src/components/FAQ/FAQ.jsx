

const FAQ = () => {
    return (
        <div>
            <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">How do I book a service?</div>
            <div className="collapse-content">
                <p>Booking a service is easy! Simply log in to your account, browse the available services, click on the <q>View Details</q> button for the desired service, and then select <q>Book Now.</q> Fill in the necessary details, and confirm your booking.</p>
            </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Can I update my booked service status?</div>
            <div className="collapse-content">
                <p>Yes! If you are the service provider, you can update the status of any service booked by your customers. Navigate to the <q>Service To-Do</q> section in your dashboard, find the relevant booking, and use the dropdown menu to change its status (e.g., Pending, Working, Completed).</p>
            </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content">
                <p>hello</p>
            </div>
            </div>
        </div>
    );
};

export default FAQ;