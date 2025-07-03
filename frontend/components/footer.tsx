import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 px-4 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Team Information</h2>
          <p className="text-lg text-gray-300">Get in touch with our team members</p>
        </div>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">JSS Science and Technology University</h3>
                <h4 className="text-lg font-semibold text-blue-300 mb-6">Subject: Web + ML</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <p className="text-gray-300">Team Members:</p>
                  </div>
                  <div className="flex items-center space-x-3 pl-8">
                    <span className="text-gray-300">A S Darshan</span>
                    <a
                      href="https://www.linkedin.com/in/darshan-a-s-9a0350268/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/linkedin.svg"
                        alt="LinkedIn"
                        className="h-5 w-5 inline-block"
                      />
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 pl-8">
                    <span className="text-gray-300">Akshay K Y</span>
                    <a
                      href="https://www.linkedin.com/in/akshayky/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/linkedin.svg"
                        alt="LinkedIn"
                        className="h-5 w-5 inline-block"
                      />
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 pl-8">
                    <span className="text-gray-300">Amith Kumar H</span>
                    <img
                      src="/images/linkedin.svg"
                      alt="LinkedIn"
                      className="h-5 w-5 inline-block opacity-50"
                    />
                  </div>
                  <div className="flex items-center space-x-3 pl-8">
                    <span className="text-gray-300">Vinit V A</span>
                    <a
                      href="https://www.linkedin.com/in/vinit-afzalpurkar-22324333a/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/linkedin.svg"
                        alt="LinkedIn"
                        className="h-5 w-5 inline-block"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-6">Department of Computer Engineering</h3>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    This project is developed as part of the Bachelor of Engineering program in Computer Engineering,
                    focusing on the application of artificial intelligence and machine learning in medical image
                    analysis.
                  </p>
                  <p className="text-gray-300">
                    Our research aims to contribute to the advancement of automated medical diagnosis systems and
                    improve healthcare outcomes through technology.
                  </p>
                  {/* <div className="pt-4">
                    <h4 className="font-semibold text-white mb-2">Research Areas:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Medical Image Processing</li>
                      <li>• Deep Learning Applications</li>
                      <li>• Computer Vision in Healthcare</li>
                      <li>• AI-Assisted Diagnosis</li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400">© JSS Science and Technology University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
