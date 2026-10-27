"use client";

import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";

interface DynamicIconProps extends LucideProps {
    name: string;
}

export default function DynamicIcon({ name, size = 22, ...props }: DynamicIconProps) {
    const IconComponent = (Icons as unknown as Record<string, React.ComponentType<LucideProps>>)[name] || Icons.HelpCircle;

    return <IconComponent size={size} {...props} />;
}