document.addEventListener('DOMContentLoaded', function () {
    // Inject Custom Modern Styles
    const style = document.createElement('style');
    style.textContent = `
        /* Modern Lead Popup Styles */
        .swal2-container.modern-popup-backdrop {
            backdrop-filter: blur(8px);
            background: rgba(39, 36, 107, 0.4) !important; /* Primary accent opacity */
        }

        .swal2-popup.modern-lead-popup {
            border-radius: 20px !important;
            padding: 0 !important;
            overflow: hidden;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
            background: #ffffff url('assets/media/shapes/popup-bg-shape.png') no-repeat top right !important; /* Optional shape if exists, or fallback white */
            font-family: 'Inter', sans-serif !important;
            max-width: 450px !important;
            width: 90% !important;
        }

        /* Header Section */
        .modern-popup-header {
            background: linear-gradient(135deg, #27246B 0%, #1a184a 100%);
            padding: 30px 20px;
            text-align: center;
            color: white;
            position: relative;
        }
        
        .modern-popup-header::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 20px;
            height: 20px;
            background: #ffffff;
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            transform: translateX(-50%) rotate(180deg);
        }

        .modern-popup-icon {
            width: 60px;
            height: 60px;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 15px;
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255,255,255,0.2);
        }

        .modern-popup-icon i {
            font-size: 28px;
            color: #FAC800; /* Secondary Accent */
        }

        .modern-popup-title {
            margin: 0;
            font-size: 24px;
            font-weight: 700;
            color: #ffffff;
            letter-spacing: -0.5px;
        }

        .modern-popup-subtitle {
            margin-top: 8px;
            font-size: 14px;
            color: rgba(255,255,255,0.8);
            line-height: 1.4;
        }

        /* Body Section */
        .modern-popup-body {
            padding: 30px 25px 25px;
            background: #ffffff;
        }

        .input-group-modern {
            position: relative;
            margin-bottom: 20px;
            text-align: left;
        }

        .input-group-modern label {
            display: block;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #27246B;
            margin-bottom: 6px;
            font-weight: 600;
        }

        .modern-input {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            font-size: 15px;
            transition: all 0.3s ease;
            background: #f8fafc;
            box-sizing: border-box;
            color: #334155;
        }

        .modern-input:focus {
            border-color: #27246B;
            background: #ffffff;
            box-shadow: 0 0 0 4px rgba(39, 36, 107, 0.1);
            outline: none;
        }

        .modern-select {
            appearance: none;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2327246b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 1rem center;
            background-size: 1em;
        }

        /* Custom Swal Overrides */
        .swal2-actions {
            margin: 0 !important;
            padding: 0 25px 25px !important;
            width: 100% !important;
            box-sizing: border-box !important;
        }

        .modern-confirm-btn {
            background: linear-gradient(135deg, #25D366 0%, #128C7E 100%) !important;
            color: white !important;
            border-radius: 12px !important;
            padding: 14px 20px !important;
            font-size: 16px !important;
            font-weight: 600 !important;
            width: 100% !important;
            display: flex !important;
            align-items: center justify-content: center !important;
            box-shadow: 0 4px 6px -1px rgba(37, 211, 102, 0.3) !important;
            transition: transform 0.2s ease !important;
        }

        .modern-confirm-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(37, 211, 102, 0.4) !important;
        }

        .swal2-close {
            color: rgba(255,255,255,0.6) !important;
            position: absolute !important;
            top: 10px !important;
            right: 10px !important;
        }
        
        .swal2-close:hover {
            color: #ffffff !important;
            background: transparent !important;
        }
        
        /* Animation */
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0px); }
        }
        
        .modern-popup-icon i {
            animation: float 3s ease-in-out infinite;
        }
    `;
    document.head.appendChild(style);

    // Delay the popup slightly for a better user experience
    setTimeout(function () {
        Swal.fire({
            title: '',
            html: `
                <div class="modern-popup-header">
                    <div class="modern-popup-icon"><i class="fas fa-rocket"></i></div>
                    <h2 class="modern-popup-title">Start Your Career 🚀</h2>
                    <div class="modern-popup-subtitle">Get course details & expert guidance instantly on WhatsApp!</div>
                </div>
                <div class="modern-popup-body">
                    <div class="input-group-modern">
                        <label>Full Name</label>
                        <input type="text" id="lead-name" class="modern-input" placeholder="e.g. john doe">
                    </div>
                    <div class="input-group-modern">
                        <label>Interested Course</label>
                        <select id="lead-course" class="modern-input modern-select">
                            <option value="" disabled selected>Select your interest...</option>
                            <option value="Graphic Design">Graphic Design (Photoshop, Illustrator, etc.)</option>
                            <option value="Video Editing">Video Editing & Motion Graphics</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Typing Skills">Typing Skills & Data Entry</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Other">Other / General Enquiry</option>
                        </select>
                    </div>
                </div>
            `,
            showConfirmButton: true,
            confirmButtonText: 'Chat on WhatsApp <i class="fab fa-whatsapp ms-2"></i>',
            buttonsStyling: false,
            customClass: {
                popup: 'modern-lead-popup',
                container: 'modern-popup-backdrop',
                confirmButton: 'modern-confirm-btn',
                closeButton: 'modern-close-btn'
            },
            showCloseButton: true,
            focusConfirm: false,
            width: 'auto',
            padding: 0,
            allowOutsideClick: false, // Force interaction for better conversion? Or let them close? Let's keep it closeable for UX.
            allowOutsideClick: true,
            preConfirm: () => {
                const name = Swal.getPopup().querySelector('#lead-name').value;
                const course = Swal.getPopup().querySelector('#lead-course').value;

                if (!name || !course) {
                    Swal.showValidationMessage(`Please complete all fields to proceed`);
                    const nameInput = Swal.getPopup().querySelector('#lead-name');
                    const courseInput = Swal.getPopup().querySelector('#lead-course');
                    if (!name) nameInput.style.borderColor = '#ef4444';
                    if (!course) courseInput.style.borderColor = '#ef4444';
                    return false;
                }
                return { name: name, course: course };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const name = result.value.name;
                const course = result.value.course;
                const phoneNumber = '919539627170';

                const message = `Hi, I am ${name}. I am interested in the ${course} course. Please provide me with fees and duration details.`;
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

                // sessionStorage.setItem('mj_lead_popup_shown', 'true'); // Removed to keep popup showing
                window.open(whatsappUrl, '_blank');
            }
        });

        // sessionStorage.setItem('mj_lead_popup_shown', 'true'); // Removed to keep popup showing

    }, 2000);
});
