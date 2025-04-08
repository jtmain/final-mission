"use client";
import { useState } from "react";

interface DualBoxModalProps {
  titleTop: string;
  contentTop: string;
  contentBottom: string;
  leftImageBottom: string;
  rightImageBottom: string;
  onClose: () => void;
}

// DualBoxModal displays a modal split into two sections.
// The top section shows centered text only.
// The bottom section displays images on the left and right and left–aligned text (not centered) with a full-width Close button below.
function DualBoxModal({
  titleTop,
  contentTop,
  contentBottom,
  leftImageBottom,
  rightImageBottom,
  onClose,
}: DualBoxModalProps) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 z-50"
    >
      {/* Wider container for ample space */}
      <div onClick={(e) => e.stopPropagation()} className="w-[95%] max-w-7xl">
        {/* Top Section: Centered text only */}
        <div className="bg-white px-6 pt-2 pb-2 rounded-t-lg shadow-lg">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2 text-purple-300">
              {titleTop}
            </h1>
            <p className="text-base text-gray-700">{contentTop}</p>
          </div>
        </div>
        {/* Bottom Section: Images on sides with left-aligned text */}
        <div className="bg-white px-6 pt-2 pb-4 rounded-b-lg shadow-lg border-t border-gray-200">
          <div className="flex items-center justify-center">
            <img
              src={leftImageBottom}
              alt="Left Image"
              className="w-48 h-48 object-cover rounded mr-8"
            />
            <div className="max-w-3xl text-left">
              <p className="text-base text-gray-700 mb-4">{contentBottom}</p>
            </div>
            <img
              src={rightImageBottom}
              alt="Right Image"
              className="w-48 h-48 object-cover rounded ml-8"
            />
          </div>
          <div className="mt-4">
            <button
              onClick={onClose}
              className="w-full border border-gray-300 rounded px-6 py-3 text-base text-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PastelModalPage() {
  // activeModal holds 1, 2, or 3 to represent the selected option; null if no modal is open.
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const openModal = (option: number) => setActiveModal(option);
  const closeModal = () => setActiveModal(null);

  // Define modal content and image paths based on the active option.
  let modalContent:
    | {
        titleTop: string;
        contentTop: string;
        contentBottom: string;
        leftImageBottom: string;
        rightImageBottom: string;
      }
    | null = null;

  if (activeModal === 1) {
    modalContent = {
      titleTop: "Beginnings",
      contentTop:
        "“Growing up, I had a strong interest in technology and problem-solving. I always dreamed of working on projects that could make a real difference in people’s lives. I was fascinated by how communities grow and support one another, and I often imagined myself playing a role in that process through innovation or business”",
      contentBottom:
        `	The world today lacks empathy. As we categorize human lives into binary, we too become robotic. So what becomes of those who don't fit the mold of ones and zeros? The individuals suffering from poverty, disability, or discrimination? Often, they are left to their own devices without any support. However, they are expected to meet the same standards as the rest of us. Yash Trivedi is an individual who sees through this faulty system. Through clubs, gatherings, and guidance; he does whatever he can to close this gap in privilege. Born in 2003, Yash had a complicated childhood. Though he spent his infancy in Quebec, the majority of his early life resided within Mississauga. His relationship with his family was healthy, however the same couldn't be said about his peers. When Yash moved to middle school, he was met with harassment. He came in as the only child: of color, with a scrawny figure, recently diagnosed with ADHD. This violent bullying continued for over 2 years; affecting him not only physically, but also mentally. During this period Yash also struggled with his studies. There were not many resources available for ADHD, thus he often found difficulty concentrating and sitting still. Throughout all this, Yash maintained his curiosity. Eventually he found his spark in programming, fascinated by its problem solving aspect. Gazing upon those before him, Yash dreamed of making his own company one day, combining both technology and business. In 2016 Yash’s family moved once more, this time to Oakville. Entering the gifted education program, he was quite calm. In his final years of middle school, Yash had solidified his goals and gotten a handle on his ADHD. This led him to resounding success in highschool. Yash was not only the top of his class but also a changemaker in his community. He founded and served as president of many clubs, alongside competing in national competitions. One such competition was Hack The North, a multi day hackathon in which participants created their own applications to better humanity. Yash and his teammates created Prepri, a device utilizing cutting edge technology to teach dyslexic children how to read. However, this project was just the first step in his journey to providing accessibility. 
`,
      leftImageBottom: "/purple1.jpg",
      rightImageBottom: "/purple2.jpg",
    };
  } else if (activeModal === 2) {
    modalContent = {
      titleTop: "New Perspectives",
      contentTop:
        "“I currently hold several roles within different communities, particularly in academic and business settings. On campus, I take part in organizing study groups and review sessions to help students better understand their coursework and prepare for exams. In the professional space, I contribute to private business communities by helping coordinate online showcases and collaborating with others who are building new ventures.”",
      contentBottom:
        "Currently, Yash’s community roles revolve around his two universities. He has taken up academic positions in both Laurier and Waterloo. This is possible due to his special dual degree program, it allows him to attend both universities simultaneously alongside 200 other students. With this special opportunity, he was able to achieve his lifelong dream of pairing both business and technology. However this was not his only contribution to the community. Yash excels in academics, as seen in his perfect 4.0 GPA. However he understands his privilege, and ever since making Prepri, he has been helping less fortunate individuals raise their marks. Cheating was out of the question due to Yash’s strong moral aversion to it, instead he held study sessions. Study sessions allow students to bounce ideas off one another. This way, even when he moves on, they can continue to learn by themselves. This has helped raise the class average on many exams, all due to his help. Alongside this, Yash holds sessions that help autistic students better understand social cues. This is crucial in not only business, but also daily life. In particular, when he holds these sessions, he finds himself returning to his middle school days. He wished he had someone to help him through his struggles then, so now he helps others with their struggles now.",
      leftImageBottom: "/purple3.jpg",
      rightImageBottom: "/purple4.jpg",
    };
  } else if (activeModal === 3) {
    modalContent = {
      titleTop: "Option 3: Gentle Visions",
      contentTop:
        "Option 3 offers a fresh perspective, highlighted by serene images and welcoming text.",
      contentBottom:
        "More in-depth information for Option 3 is available here to enrich your understanding.",
      leftImageBottom: "/purple5.jpg",
      rightImageBottom: "/purple6.jpg",
    };
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 space-y-4">
      <h1 className="text-5xl font-bold text-purple-300">Pastel Modal Options</h1>
      <div className="flex space-x-8">
        <button
          onClick={() => openModal(1)}
          className="border border-purple-300 rounded px-8 py-3 text-2xl text-purple-300"
        >
          Option 1
        </button>
        <button
          onClick={() => openModal(2)}
          className="border border-purple-300 rounded px-8 py-3 text-2xl text-purple-300"
        >
          Option 2
        </button>
        <button
          onClick={() => openModal(3)}
          className="border border-purple-300 rounded px-8 py-3 text-2xl text-purple-300"
        >
          Option 3
        </button>
      </div>

      {activeModal && modalContent && (
        <DualBoxModal
          titleTop={modalContent.titleTop}
          contentTop={modalContent.contentTop}
          contentBottom={modalContent.contentBottom}
          leftImageBottom={modalContent.leftImageBottom}
          rightImageBottom={modalContent.rightImageBottom}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
