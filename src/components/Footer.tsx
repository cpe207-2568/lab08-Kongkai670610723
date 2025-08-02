import type {FooterProps} from "../libs/types";


//"./components/Footer.tsx"
export function Footer ({year,fullName,studentId}: FooterProps) {
    return (
      <footer className="text-secondary text-center p-2 bg-light mt-auto">
        <p>{year} {fullName} {studentId}</p>
      </footer>
    );
}