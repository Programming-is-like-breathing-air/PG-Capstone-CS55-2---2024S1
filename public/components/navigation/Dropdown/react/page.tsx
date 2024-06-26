import React, { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
export function NavigationMenuDemo() {
  const [isOpen, setIsOpen] = useState(false);
  // Toggle the display state of the drop-down menu on click
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // Stop event bubbling to prevent the menu from closing when the drop-down content is clicked
  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger onClick={toggleDropdown} aria-expanded={isOpen}>UNI</NavigationMenuTrigger>
          {isOpen && (
            <NavigationMenuContent onClick={handleDropdownClick} style={{ minWidth: '200px', width: 'auto', padding: '8px 0' }}>
              <NavigationMenuLink style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: 'black' }} href="https://www.sydney.edu.au/">Home</NavigationMenuLink>
              <NavigationMenuLink style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: 'black' }} href="https://www.sydney.edu.au/about-us.html">About Us</NavigationMenuLink>
              <NavigationMenuLink style={{ display: 'block', padding: '8px 0', textDecoration: 'none', color: 'black' }} href="https://www.sydney.edu.au/contact-us.html">Contact</NavigationMenuLink>
            </NavigationMenuContent>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
export default NavigationMenuDemo;