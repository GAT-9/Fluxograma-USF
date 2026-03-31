/*
 * DESIGN PHILOSOPHY: Soft Clinical
 * FAQ data for hospital staff — Patient Admission activities.
 * Each category has a color accent and a set of FAQ items with step-by-step answers.
 */

export interface FaqStep {
  step: number;
  instruction: string;
}

export interface FaqItem {
  id: string;
  question: string;
  department: string;
  answer: string;
  steps?: FaqStep[];
  note?: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  description: string;
  color: string;        // Tailwind border/text color class
  bgColor: string;      // Tailwind bg color class for badge
  icon: string;         // Lucide icon name
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    id: "pre-admission",
    label: "Pre-Admission",
    description: "Procedures and verifications to be completed before the patient arrives at the ward.",
    color: "border-blue-500",
    bgColor: "bg-blue-50 text-blue-700",
    icon: "ClipboardList",
    items: [
      {
        id: "pa-01",
        question: "How do I verify a patient's insurance coverage before admission?",
        department: "Admissions Office",
        answer: "Insurance verification must be completed at least 24 hours before a scheduled admission. Access the patient's file in the HIS (Hospital Information System) and follow the steps below.",
        steps: [
          { step: 1, instruction: "Log in to the HIS portal and navigate to Patient Management > Pre-Admission." },
          { step: 2, instruction: "Search for the patient by full name or medical record number (MRN)." },
          { step: 3, instruction: "Open the patient's profile and select the 'Insurance' tab." },
          { step: 4, instruction: "Click 'Verify Coverage' to initiate an automated eligibility check with the insurer." },
          { step: 5, instruction: "If the automated check fails, call the insurer directly using the number listed on the patient's insurance card." },
          { step: 6, instruction: "Document the verification result and the representative's name in the 'Notes' field." },
          { step: 7, instruction: "Set the coverage status to 'Verified' or 'Pending' and save the record." },
        ],
        note: "If coverage cannot be confirmed within 4 hours of the scheduled admission, escalate to the Billing Supervisor.",
      },
      {
        id: "pa-02",
        question: "What documents must be collected during pre-admission registration?",
        department: "Reception",
        answer: "A complete pre-admission package ensures a smooth check-in process and avoids delays on the day of admission. The following documents are mandatory.",
        steps: [
          { step: 1, instruction: "Government-issued photo ID (national ID, passport, or driver's license)." },
          { step: 2, instruction: "Original insurance card and a photocopy for the file." },
          { step: 3, instruction: "Completed Patient Admission Form (PAF-01), signed by the patient or legal guardian." },
          { step: 4, instruction: "Physician's admission order, signed and dated within the last 72 hours." },
          { step: 5, instruction: "Consent for Treatment form (CT-02), signed and witnessed." },
          { step: 6, instruction: "Advance Directive or Healthcare Proxy form, if applicable." },
        ],
        note: "Scan all documents and upload them to the patient's electronic record before the end of the shift.",
      },
      {
        id: "pa-03",
        question: "How do I schedule a pre-admission assessment for surgical patients?",
        department: "Pre-Admission Testing (PAT) Unit",
        answer: "Surgical patients require a pre-admission assessment to evaluate fitness for surgery and anesthesia. This must be scheduled at least 5 business days before the procedure.",
        steps: [
          { step: 1, instruction: "Receive the surgical booking confirmation from the Operating Room Coordinator." },
          { step: 2, instruction: "Contact the patient by phone to schedule the PAT appointment, offering morning slots (08:00–12:00) when possible." },
          { step: 3, instruction: "Enter the PAT appointment in the HIS scheduling module under 'Pre-Admission Testing'." },
          { step: 4, instruction: "Send the patient a confirmation letter via email or post, including the list of required fasting instructions and medications to bring." },
          { step: 5, instruction: "Flag the surgical booking as 'PAT Scheduled' in the OR schedule." },
        ],
      },
    ],
  },
  {
    id: "registration",
    label: "Registration & Check-In",
    description: "Steps for registering a patient upon arrival and completing the check-in process.",
    color: "border-teal-500",
    bgColor: "bg-teal-50 text-teal-700",
    icon: "UserCheck",
    items: [
      {
        id: "reg-01",
        question: "What is the standard check-in procedure for a scheduled admission?",
        department: "Reception",
        answer: "Scheduled admissions should be processed within 15 minutes of the patient's arrival. Follow the steps below to complete the check-in efficiently.",
        steps: [
          { step: 1, instruction: "Greet the patient and ask for their name and date of birth to confirm identity." },
          { step: 2, instruction: "Locate the pre-admission record in the HIS using the MRN or appointment number." },
          { step: 3, instruction: "Verify that all pre-admission documents are on file; if any are missing, collect them now." },
          { step: 4, instruction: "Confirm the patient's current address, emergency contact, and primary care physician." },
          { step: 5, instruction: "Issue the patient's wristband (print from the HIS wristband module) and verify the information with the patient before applying." },
          { step: 6, instruction: "Assign the patient to their designated bed and notify the receiving ward nurse via the HIS bed management module." },
          { step: 7, instruction: "Provide the patient with the 'Patient Rights & Responsibilities' brochure and the ward orientation guide." },
        ],
        note: "Always use two patient identifiers (name + date of birth) before applying the wristband. Never use room number as an identifier.",
      },
      {
        id: "reg-02",
        question: "How should I handle a walk-in patient requesting emergency admission?",
        department: "Emergency Department (ED) Triage",
        answer: "Walk-in patients presenting with urgent or emergent conditions must be triaged immediately. Do not delay triage to complete administrative registration.",
        steps: [
          { step: 1, instruction: "Escort the patient to the triage nurse immediately upon arrival." },
          { step: 2, instruction: "The triage nurse assigns an ESI (Emergency Severity Index) level (1–5) within 2 minutes." },
          { step: 3, instruction: "For ESI 1 or 2: activate the emergency team and move the patient to a treatment room before completing registration." },
          { step: 4, instruction: "For ESI 3–5: complete a brief administrative registration (name, DOB, chief complaint) and direct the patient to the waiting area." },
          { step: 5, instruction: "Collect full registration details (ID, insurance, contacts) once the patient is stabilized." },
          { step: 6, instruction: "Document the triage time and ESI level in the ED module of the HIS." },
        ],
        note: "If the patient is unconscious or unable to provide information, use the 'Unknown Patient' protocol and assign a temporary MRN.",
      },
      {
        id: "reg-03",
        question: "How do I create a new patient record for a first-time admission?",
        department: "Admissions Office",
        answer: "New patients must have a unique Medical Record Number (MRN) created before any clinical activity is recorded.",
        steps: [
          { step: 1, instruction: "In the HIS, navigate to Patient Management > New Patient Registration." },
          { step: 2, instruction: "Search by full name and date of birth to confirm the patient does not already have a record (to prevent duplicate MRNs)." },
          { step: 3, instruction: "If no record exists, click 'Create New Patient' and enter all mandatory fields: full legal name, date of birth, gender, address, and contact number." },
          { step: 4, instruction: "Scan and attach the government-issued ID to the new record." },
          { step: 5, instruction: "The system will automatically generate a unique MRN. Print the MRN label and attach it to the physical file." },
          { step: 6, instruction: "Proceed with the standard check-in procedure using the new MRN." },
        ],
      },
    ],
  },
  {
    id: "clinical-assessment",
    label: "Clinical Assessment",
    description: "Initial nursing and medical assessments required at the time of admission.",
    color: "border-green-500",
    bgColor: "bg-green-50 text-green-700",
    icon: "Stethoscope",
    items: [
      {
        id: "ca-01",
        question: "What is included in the initial nursing admission assessment?",
        department: "Nursing",
        answer: "The initial nursing assessment must be completed within 2 hours of the patient's arrival on the ward. It establishes a clinical baseline and identifies immediate care needs.",
        steps: [
          { step: 1, instruction: "Obtain and document vital signs: blood pressure, heart rate, respiratory rate, temperature, and oxygen saturation (SpO₂)." },
          { step: 2, instruction: "Assess and document the patient's pain level using the NRS (Numeric Rating Scale, 0–10)." },
          { step: 3, instruction: "Complete the Fall Risk Assessment using the Morse Fall Scale; apply fall prevention measures if the score is ≥ 45." },
          { step: 4, instruction: "Perform a skin integrity assessment and document any existing wounds, bruises, or pressure injuries using the Braden Scale." },
          { step: 5, instruction: "Record the patient's current medications (name, dose, frequency, last dose taken)." },
          { step: 6, instruction: "Document known allergies and adverse drug reactions in the allergy section of the HIS; apply the allergy wristband if applicable." },
          { step: 7, instruction: "Complete the Nutritional Screening Tool (NST); refer to the dietitian if the score indicates nutritional risk." },
          { step: 8, instruction: "Document all findings in the Nursing Admission Assessment form (NAA-03) in the HIS." },
        ],
        note: "If the patient is unable to provide history, obtain information from the accompanying family member or caregiver and document the source.",
      },
      {
        id: "ca-02",
        question: "How do I complete the medication reconciliation process at admission?",
        department: "Nursing / Pharmacy",
        answer: "Medication reconciliation at admission prevents medication errors and adverse events. It must be completed within 4 hours of admission.",
        steps: [
          { step: 1, instruction: "Collect the patient's complete medication list: prescription drugs, over-the-counter medications, vitamins, and herbal supplements." },
          { step: 2, instruction: "Verify the list against the patient's pharmacy records (accessible via the HIS Pharmacy Integration module)." },
          { step: 3, instruction: "Document the reconciled medication list in the HIS under 'Medication Reconciliation'." },
          { step: 4, instruction: "Identify any discrepancies (omissions, duplications, or dose differences) and report them to the admitting physician." },
          { step: 5, instruction: "The physician reviews and approves the reconciled list, entering admission medication orders accordingly." },
          { step: 6, instruction: "Notify the pharmacy of any high-alert medications (anticoagulants, insulin, opioids) for additional verification." },
        ],
        note: "Patients on anticoagulant therapy must have a dedicated anticoagulation management note created at the time of reconciliation.",
      },
      {
        id: "ca-03",
        question: "What is the procedure for admitting a patient with known infectious disease?",
        department: "Infection Control / Nursing",
        answer: "Patients with confirmed or suspected infectious conditions require isolation precautions to be implemented immediately upon arrival.",
        steps: [
          { step: 1, instruction: "Identify the transmission route: contact, droplet, or airborne (refer to the Infection Control Manual, Table 3)." },
          { step: 2, instruction: "Assign the patient to an appropriate isolation room; contact the Bed Management team if no isolation room is available." },
          { step: 3, instruction: "Place the correct isolation signage on the room door (color-coded: yellow = contact, blue = droplet, red = airborne)." },
          { step: 4, instruction: "Don the appropriate PPE before entering the room (refer to PPE donning/doffing posters outside the room)." },
          { step: 5, instruction: "Notify the Infection Control Nurse (ICN) via the HIS alert system within 1 hour of identification." },
          { step: 6, instruction: "Document the isolation precautions in the patient's care plan and flag the HIS record with the relevant infection alert." },
        ],
        note: "Do not transport the patient through common areas without a mask and appropriate cover. Coordinate transport with the ICN.",
      },
    ],
  },
  {
    id: "documentation",
    label: "Documentation & Consent",
    description: "Required documentation, consent forms, and legal compliance during the admission process.",
    color: "border-amber-500",
    bgColor: "bg-amber-50 text-amber-700",
    icon: "FileText",
    items: [
      {
        id: "doc-01",
        question: "Which consent forms are required for a standard inpatient admission?",
        department: "Admissions Office / Nursing",
        answer: "Informed consent is a legal and ethical requirement. The following forms must be signed before any clinical intervention begins.",
        steps: [
          { step: 1, instruction: "Consent for Treatment (CT-02): General consent for routine hospital care. Must be signed at registration." },
          { step: 2, instruction: "Privacy Notice Acknowledgment (PNA-01): Acknowledges the patient has received the hospital's privacy policy (HIPAA/LGPD). Required at first admission." },
          { step: 3, instruction: "Financial Responsibility Agreement (FRA-03): Confirms the patient's understanding of billing and payment obligations." },
          { step: 4, instruction: "Surgical/Procedural Consent (SC-05): Specific to each planned procedure; must be obtained by the performing physician, not by nursing or administrative staff." },
          { step: 5, instruction: "Blood Transfusion Consent (BTC-01): Required if transfusion is anticipated; document refusal if the patient declines." },
          { step: 6, instruction: "Research Consent (RC-07): Only required if the patient is enrolled in a clinical study." },
        ],
        note: "Consent must be obtained in the patient's preferred language. Request an interpreter through the HIS Language Services module if needed.",
      },
      {
        id: "doc-02",
        question: "How do I document a patient's refusal of treatment?",
        department: "Nursing / Medical Staff",
        answer: "A patient's right to refuse treatment must be respected and documented thoroughly to protect both the patient and the clinical team.",
        steps: [
          { step: 1, instruction: "Ensure the patient has been fully informed of the risks of refusing the proposed treatment." },
          { step: 2, instruction: "Notify the attending physician immediately." },
          { step: 3, instruction: "Complete the 'Refusal of Treatment' form (RT-04) with the patient; document the specific treatment refused and the reason given." },
          { step: 4, instruction: "Have the patient sign the form; if the patient refuses to sign, document this refusal in the form and have a witness sign." },
          { step: 5, instruction: "Scan and upload the signed form to the patient's HIS record under 'Legal Documents'." },
          { step: 6, instruction: "Document the incident in the nursing notes, including the time, the physician notified, and the patient's stated reason." },
        ],
        note: "If there are concerns about the patient's decision-making capacity, contact the Ethics Committee or the on-call psychiatrist for a capacity assessment.",
      },
      {
        id: "doc-03",
        question: "How should I handle admission documentation for a minor patient?",
        department: "Admissions Office",
        answer: "Patients under 18 years of age require parental or legal guardian consent for all medical interventions. Additional documentation is required.",
        steps: [
          { step: 1, instruction: "Verify the identity of the parent or legal guardian using a government-issued ID." },
          { step: 2, instruction: "Confirm legal guardianship if the accompanying adult is not the biological parent (court order or guardianship certificate required)." },
          { step: 3, instruction: "All consent forms must be signed by the parent or legal guardian, not by the minor." },
          { step: 4, instruction: "Document the guardian's name, relationship to the patient, and contact number in the HIS." },
          { step: 5, instruction: "For emancipated minors (married, military, or court-declared), obtain and file the emancipation documentation before proceeding." },
        ],
        note: "Minors aged 16–17 may consent to certain treatments independently depending on local legislation. Consult the Legal Department if uncertain.",
      },
    ],
  },
  {
    id: "bed-management",
    label: "Bed Management",
    description: "Procedures for bed assignment, transfers, and capacity management during patient admission.",
    color: "border-violet-500",
    bgColor: "bg-violet-50 text-violet-700",
    icon: "BedDouble",
    items: [
      {
        id: "bm-01",
        question: "How do I assign a bed to an incoming patient?",
        department: "Bed Management / Nursing",
        answer: "Bed assignment must consider the patient's clinical needs, isolation requirements, and ward capacity. Follow the steps below.",
        steps: [
          { step: 1, instruction: "Access the Bed Management dashboard in the HIS (Home > Bed Management > Available Beds)." },
          { step: 2, instruction: "Filter beds by ward, bed type (standard, monitored, isolation), and gender (if applicable)." },
          { step: 3, instruction: "Select the most appropriate available bed based on the patient's clinical condition and admission order." },
          { step: 4, instruction: "Click 'Assign Bed' and link the bed to the patient's MRN." },
          { step: 5, instruction: "Notify the receiving ward charge nurse via the HIS messaging system and by phone." },
          { step: 6, instruction: "Update the bed status to 'Occupied — Pending Arrival' until the patient physically arrives on the ward." },
        ],
        note: "Do not assign a bed that is pending housekeeping clearance. Check the bed status icon before assignment.",
      },
      {
        id: "bm-02",
        question: "What is the procedure when no beds are available at the time of admission?",
        department: "Bed Management / Administration",
        answer: "When the hospital reaches full capacity, a structured escalation process must be followed to ensure patient safety.",
        steps: [
          { step: 1, instruction: "Notify the Bed Management Coordinator and the Nursing Supervisor immediately." },
          { step: 2, instruction: "Review the discharge list for patients expected to be discharged within the next 2–4 hours." },
          { step: 3, instruction: "Activate the 'Capacity Alert' in the HIS to notify all ward charge nurses to expedite pending discharges." },
          { step: 4, instruction: "If the patient requires urgent admission (ESI 1–2), the Medical Director may authorize a temporary overflow bed in a designated area." },
          { step: 5, instruction: "For elective admissions, contact the patient and the referring physician to discuss rescheduling." },
          { step: 6, instruction: "Document all capacity management actions in the HIS Incident Log." },
        ],
        note: "The hospital's Surge Capacity Plan (SCP-01) provides additional escalation steps for mass casualty or pandemic scenarios.",
      },
      {
        id: "bm-03",
        question: "How do I process an internal patient transfer between wards?",
        department: "Nursing / Bed Management",
        answer: "Internal transfers require clinical handover, updated documentation, and coordination between the sending and receiving units.",
        steps: [
          { step: 1, instruction: "Obtain a physician's transfer order in the HIS before initiating any transfer." },
          { step: 2, instruction: "The sending nurse completes the SBAR (Situation, Background, Assessment, Recommendation) handover with the receiving nurse." },
          { step: 3, instruction: "Update the patient's bed assignment in the HIS Bed Management module." },
          { step: 4, instruction: "Ensure all medications, belongings, and the physical patient file accompany the patient." },
          { step: 5, instruction: "The receiving nurse verifies the patient's identity (name + DOB) and confirms the wristband information upon arrival." },
          { step: 6, instruction: "Document the transfer time and the receiving nurse's name in the HIS nursing notes." },
        ],
      },
    ],
  },
  {
    id: "special-cases",
    label: "Special Cases",
    description: "Admission procedures for patients requiring special handling, including VIPs, unidentified patients, and psychiatric admissions.",
    color: "border-rose-500",
    bgColor: "bg-rose-50 text-rose-700",
    icon: "ShieldAlert",
    items: [
      {
        id: "sc-01",
        question: "What is the protocol for admitting an unidentified (unknown) patient?",
        department: "Emergency Department / Admissions",
        answer: "Unidentified patients must receive immediate care while the hospital works to establish their identity. A temporary record must be created.",
        steps: [
          { step: 1, instruction: "Create a temporary patient record in the HIS using the 'Unknown Patient' protocol (prefix: UNK + date + sequential number, e.g., UNK-20260326-001)." },
          { step: 2, instruction: "Document all available physical descriptors (approximate age, gender, distinguishing features) in the record." },
          { step: 3, instruction: "Photograph any personal belongings and store them in the Security Office with a numbered tag linked to the temporary MRN." },
          { step: 4, instruction: "Notify the hospital's Social Work department and the local police authority as required by law." },
          { step: 5, instruction: "Once identity is confirmed, merge the temporary record with the patient's permanent MRN using the HIS 'Record Merge' function." },
          { step: 6, instruction: "Notify the Social Worker and update all clinical documentation with the confirmed identity." },
        ],
        note: "Never discard or alter the temporary record. The merge function preserves all clinical data entered under the temporary MRN.",
      },
      {
        id: "sc-02",
        question: "How should I handle the admission of a VIP or high-profile patient?",
        department: "Administration / Nursing",
        answer: "VIP admissions require additional privacy and security measures. Discretion is mandatory for all staff involved in the patient's care.",
        steps: [
          { step: 1, instruction: "Notify the Hospital Administrator and the Privacy Officer immediately upon identification of a VIP patient." },
          { step: 2, instruction: "Assign the patient to a private room; coordinate with Security to assess the need for restricted floor access." },
          { step: 3, instruction: "Flag the patient's HIS record with the 'Restricted Access' tag; only authorized staff may view the record." },
          { step: 4, instruction: "Do not confirm or deny the patient's presence to any external inquiries, including media. Refer all inquiries to the Communications Department." },
          { step: 5, instruction: "Limit the number of staff with direct patient contact to those strictly necessary for care." },
          { step: 6, instruction: "Document all access to the patient's HIS record in the audit log." },
        ],
        note: "Any breach of VIP patient privacy must be reported to the Privacy Officer within 1 hour and documented as a critical incident.",
      },
      {
        id: "sc-03",
        question: "What is the procedure for an involuntary psychiatric admission?",
        department: "Psychiatry / Legal / Nursing",
        answer: "Involuntary psychiatric admissions are governed by local mental health legislation and require strict adherence to legal and clinical protocols.",
        steps: [
          { step: 1, instruction: "Confirm that the legal criteria for involuntary admission are met (imminent risk to self or others, inability to consent due to mental illness)." },
          { step: 2, instruction: "A psychiatrist or authorized physician must complete the 'Certificate for Involuntary Admission' (CIA-01) form." },
          { step: 3, instruction: "Notify the hospital's Legal Department and the patient's next of kin (if known) within 2 hours." },
          { step: 4, instruction: "Assign the patient to a secure psychiatric unit bed; coordinate with the Psychiatric Nursing team." },
          { step: 5, instruction: "Document the legal basis for admission, the physician's assessment, and all notifications in the HIS." },
          { step: 6, instruction: "Inform the patient of their rights under the applicable mental health act, in a language they understand." },
        ],
        note: "Involuntary admission must be reviewed by a psychiatrist within 24 hours. Set a review reminder in the HIS at the time of admission.",
      },
    ],
  },
];
