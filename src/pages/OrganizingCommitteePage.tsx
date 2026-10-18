import React from 'react';
import { 
  Users, 
  Sparkles, 
  Award, 
  GraduationCap, 
  ImageIcon,
  User
} from 'lucide-react';
import { RoutePath } from '../types';
import { leadershipChairs, committeeMembers, studentVolunteers } from '../data/committee';

interface OrganizingCommitteePageProps {
  onNavigate: (path: RoutePath) => void;
}

export const OrganizingCommitteePage: React.FC<OrganizingCommitteePageProps> = ({
  onNavigate,
}) => {
  return (
    <div className="min-h-screen bg-[#f9f9ff] py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#6a4766] mb-2">
            <span className="text-[#3b82f6]">❖</span>
            <span>SYMPOSIUM GOVERNANCE &amp; FACULTY</span>
            <span className="text-[#3b82f6]">❖</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4e324c] tracking-tight">
            Organizing Committee &amp; Leadership
          </h1>
          <p className="text-sm sm:text-base text-[#64748b] mt-3">
            The dedicated faculty, researchers, and advisory members shaping HCIPAI Symposium 2027 into a crucible for transformative Human-Computer Interaction.
          </p>
        </div>

        {/* Section 1: Faculty Coordinators & Chairs */}
        <section className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6a4766]" />
            <span className="text-xs font-bold tracking-widest text-[#6a4766] uppercase">
              LEADERSHIP
            </span>
            <h2 className="font-display text-2xl font-bold text-[#1e293b] ml-2">
              Faculty Coordinators &amp; Chairs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadershipChairs.map((person) => (
              <div
                key={person.id}
                className="bg-white rounded-xl border border-[#cbd5e1] p-5 flex flex-col justify-between shadow-xs hover:border-[#6a4766]/50 hover:shadow-md transition-all group"
              >
                {/* Big Image Placeholder Covering Mostly the Card */}
                <div className="w-full aspect-[4/3] rounded-t-xl rounded-b-md border-2 border-dashed border-[#94a3b8]/60 bg-[#f8fafc] flex flex-col items-center justify-center p-4 mb-4 group-hover:bg-[#fbf9fc] transition-colors">
                  <div className="w-14 h-14 rounded-full bg-[#f4edf3] text-[#6a4766] flex items-center justify-center mb-2 border border-[#e6b9de]/60 shadow-2xs">
                    <ImageIcon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-[#4e324c] uppercase tracking-wider block">
                    [Photo Placeholder]
                  </span>
                  <span className="text-[11px] text-[#64748b] mt-0.5 block">
                    Insert Faculty Headshot
                  </span>
                </div>

                {/* Name & Designation Below */}
                <div className="text-center pt-1">
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#1e293b]">
                    {person.name}
                  </h3>
                  <p className="text-xs text-[#2563eb] font-semibold mt-1">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Organizing Committee Members */}
        <section className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563eb]" />
            <span className="text-xs font-bold tracking-widest text-[#2563eb] uppercase">
              PORTFOLIOS
            </span>
            <h2 className="font-display text-2xl font-bold text-[#1e293b] ml-2">
              Organizing Committee Members
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committeeMembers.map((person) => (
              <div
                key={person.id}
                className="bg-white rounded-xl border border-[#cbd5e1] p-5 flex flex-col justify-between shadow-xs hover:border-[#2563eb]/50 hover:shadow-md transition-all group"
              >
                {/* Big Image Placeholder Covering Mostly the Card */}
                <div className="w-full aspect-[4/3] rounded-t-xl rounded-b-md border-2 border-dashed border-[#94a3b8]/60 bg-[#f8fafc] flex flex-col items-center justify-center p-4 mb-4 group-hover:bg-[#f0f9ff] transition-colors">
                  <div className="w-14 h-14 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center mb-2 border border-[#bae6fd] shadow-2xs">
                    <ImageIcon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-[#1e40af] uppercase tracking-wider block">
                    [Photo Placeholder]
                  </span>
                  <span className="text-[11px] text-[#64748b] mt-0.5 block">
                    Insert Member Picture
                  </span>
                </div>

                {/* Name & Designation Below */}
                <div className="text-center pt-1">
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#1e293b]">
                    {person.name}
                  </h3>
                  <p className="text-xs text-[#475569] font-medium mt-1">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Student Volunteers & Coordinators */}
        <section className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#3b82f6]">❖</span>
            <span className="text-xs font-bold tracking-widest text-[#3b82f6] uppercase">
              STUDENT VANGUARD
            </span>
            <h2 className="font-display text-2xl font-bold text-[#1e293b] ml-2">
              Student Volunteers &amp; Coordinators
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {studentVolunteers.map((person) => (
              <div
                key={person.id}
                className="bg-white rounded-xl border border-[#cbd5e1] p-4 flex flex-col justify-between shadow-2xs hover:border-[#7c3aed]/50 hover:shadow-md transition-all group"
              >
                {/* Big Image Placeholder Covering Mostly the Card */}
                <div className="w-full aspect-[4/3] rounded-t-xl rounded-b-md border-2 border-dashed border-[#94a3b8]/60 bg-[#f8fafc] flex flex-col items-center justify-center p-3 mb-3 group-hover:bg-[#faf5ff] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#f5f3ff] text-[#7c3aed] flex items-center justify-center mb-1.5 border border-[#ddd6fe] shadow-2xs">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-[#6b21a8] uppercase tracking-wider block">
                    [Photo Placeholder]
                  </span>
                  <span className="text-[10px] text-[#64748b] block">
                    Insert Student Photo
                  </span>
                </div>

                {/* Name & Designation Below */}
                <div className="text-center pt-1">
                  <h3 className="font-display text-sm font-bold text-[#1e293b]">
                    {person.name}
                  </h3>
                  <p className="text-[11px] text-[#64748b] mt-0.5">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
