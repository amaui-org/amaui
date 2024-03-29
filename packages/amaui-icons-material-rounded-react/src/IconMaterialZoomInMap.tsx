import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialZoomInMap = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomInMap'

      short_name='ZoomInMap'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.025 9q-.425 0-.713-.288-.287-.287-.287-.712t.287-.713Q3.6 7 4.025 7h1.6l-2.4-2.4q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l2.4 2.4V4q0-.425.287-.713Q7.6 3 8.025 3t.713.287q.287.288.287.713v4q0 .425-.287.712Q8.45 9 8.025 9Zm16 0h-4q-.425 0-.713-.288-.287-.287-.287-.712V4q0-.425.287-.713Q15.6 3 16.025 3t.713.287q.287.288.287.713v1.6l2.4-2.4q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-2.4 2.4h1.6q.425 0 .713.287.287.288.287.713t-.287.712Q20.45 9 20.025 9Zm-16.8 11.8q-.275-.275-.275-.7 0-.425.275-.7l2.4-2.4h-1.6q-.425 0-.713-.288-.287-.287-.287-.712t.287-.713Q3.6 15 4.025 15h4q.425 0 .713.287.287.288.287.713v4q0 .425-.287.712Q8.45 21 8.025 21t-.713-.288q-.287-.287-.287-.712v-1.6l-2.4 2.4q-.275.275-.7.275-.425 0-.7-.275Zm12.8.2q-.425 0-.713-.288-.287-.287-.287-.712v-4q0-.425.287-.713.288-.287.713-.287h4q.425 0 .713.287.287.288.287.713t-.287.712q-.288.288-.713.288h-1.6l2.4 2.4q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275l-2.4-2.4V20q0 .425-.287.712-.288.288-.713.288Z"/>
    </Icon>
  );
});

IconMaterialZoomInMap.displayName = 'AmauiIconMaterialZoomInMap';

export default IconMaterialZoomInMap;
