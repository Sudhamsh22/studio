import { StudentDashboard } from "@/components/app/dashboard/student-dashboard";
import { PmDashboard } from "@/components/app/dashboard/pm-dashboard";
import { AdminDashboard } from "@/components/app/dashboard/admin-dashboard";

// TODO: This component should determine which dashboard to show based on the user's role.
// For now, it defaults to the StudentDashboard.
export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
        <StudentDashboard />
    </div>
  )
}
