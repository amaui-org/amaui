import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsAltOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltOff'

      short_name='DirectionsAltOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.775 22.575 16 18.8l-2.6 2.6q-.3.3-.662.45-.363.15-.738.15t-.738-.15q-.362-.15-.662-.45l-8-8q-.3-.3-.45-.662Q2 12.375 2 12t.15-.738q.15-.362.45-.662L5.2 8 1.375 4.2q-.3-.3-.288-.713.013-.412.313-.712t.713-.3q.412 0 .712.3l18.375 18.4q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3ZM14.6 17.4l-1.5-1.5-.4.4q-.275.275-.687.287-.413.013-.713-.287-.275-.275-.288-.688-.012-.412.263-.712l.4-.4-1.5-1.5H8q-.425 0-.713-.288Q7 12.425 7 12t.287-.713Q7.575 11 8 11h.175L6.6 9.4 4 12l8 8Zm4.25-1.45-1.4-1.4L20 12l-8-8-2.55 2.55-1.4-1.4L10.6 2.6q.3-.3.662-.45Q11.625 2 12 2t.738.15q.362.15.662.45l8 8q.3.3.45.662.15.363.15.738t-.15.738q-.15.362-.45.662Zm-2.925-2.925.35-.325q.325-.275.312-.7-.012-.425-.312-.725L12.7 7.7q-.3-.3-.7-.3-.4 0-.7.3-.1.1-.162.2-.063.1-.113.225ZM13.45 10.55ZM10.6 13.4Z"/>
    </Icon>
  );
});

IconMaterialDirectionsAltOff.displayName = 'AmauiIconMaterialDirectionsAltOff';

export default IconMaterialDirectionsAltOff;
