import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrecisionManufacturing = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrecisionManufacturing'

      short_name='PrecisionManufacturing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.475 21q-.625 0-1.062-.438-.438-.437-.438-1.062t.438-1.062Q4.85 18 5.475 18h1.6l-2.55-8.35q-.675-.375-1.112-1.1-.438-.725-.438-1.55 0-1.25.875-2.125T5.975 4q.975 0 1.738.562.762.563 1.062 1.438h3.2V5q0-.425.288-.713Q12.55 4 12.975 4q.225 0 .438.1.212.1.362.3l1.7-1.6q.225-.225.537-.288.313-.062.613.088l3.9 1.8q.3.15.413.437.112.288-.013.563-.15.3-.437.387-.288.088-.563-.037l-3.6-1.65-2.35 2.2v1.4l2.35 2.15 3.6-1.65q.275-.125.575-.025.3.1.425.375.15.3.025.575-.125.275-.425.425l-3.9 1.85q-.3.15-.613.087-.312-.062-.537-.287l-1.7-1.6q-.15.15-.362.275-.213.125-.438.125-.425 0-.712-.288-.288-.287-.288-.712V8h-3.2q-.075.2-.162.375-.088.175-.238.375l5 9.25h2.1q.625 0 1.063.438.437.437.437 1.062t-.437 1.062Q16.1 21 15.475 21Zm.5-13q.425 0 .713-.287.287-.288.287-.713t-.287-.713Q6.4 6 5.975 6t-.712.287q-.288.288-.288.713t.288.713Q5.55 8 5.975 8Zm3.15 10h1.95l-4.3-8h-.1Zm1.95 0Z"/>
    </Icon>
  );
});

IconMaterialPrecisionManufacturing.displayName = 'AmauiIconMaterialPrecisionManufacturing';

export default IconMaterialPrecisionManufacturing;
