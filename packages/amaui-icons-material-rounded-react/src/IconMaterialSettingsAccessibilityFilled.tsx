import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsAccessibilityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsAccessibilityFilled'

      short_name='SettingsAccessibility'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.025 4q-.825 0-1.412-.588-.588-.587-.588-1.412t.588-1.413Q11.2 0 12.025 0t1.413.587q.587.588.587 1.413 0 .825-.587 1.412Q12.85 4 12.025 4Zm-2 15q-.425 0-.713-.288-.287-.287-.287-.712V7q-1.25-.1-2.525-.288-1.275-.187-2.475-.462-.425-.1-.65-.463-.225-.362-.1-.787.1-.425.463-.638.362-.212.787-.112 1.8.4 3.713.575Q10.15 5 12.025 5t3.787-.175q1.913-.175 3.713-.575.425-.1.775.112.35.213.475.638.1.425-.112.787-.213.363-.638.463-1.2.275-2.475.462-1.275.188-2.525.288v11q0 .425-.287.712-.288.288-.713.288t-.713-.288q-.287-.287-.287-.712v-5h-2v5q0 .425-.287.712-.288.288-.713.288Zm-2 5q-.425 0-.713-.288-.287-.287-.287-.712t.287-.712Q7.6 22 8.025 22t.713.288q.287.287.287.712t-.287.712Q8.45 24 8.025 24Zm4 0q-.425 0-.713-.288-.287-.287-.287-.712t.287-.712Q11.6 22 12.025 22t.713.288q.287.287.287.712t-.287.712q-.288.288-.713.288Zm4 0q-.425 0-.713-.288-.287-.287-.287-.712t.287-.712Q15.6 22 16.025 22t.713.288q.287.287.287.712t-.287.712q-.288.288-.713.288Z"/>
    </Icon>
  );
});

IconMaterialSettingsAccessibilityFilled.displayName = 'AmauiIconMaterialSettingsAccessibilityFilled';

export default IconMaterialSettingsAccessibilityFilled;
