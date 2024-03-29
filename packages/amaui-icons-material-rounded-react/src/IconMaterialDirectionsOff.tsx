import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsOff'

      short_name='DirectionsOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.775 22.575 16 18.8l-2.6 2.6q-.3.3-.662.45-.363.15-.738.15t-.738-.15q-.362-.15-.662-.45l-8-8q-.3-.3-.45-.662Q2 12.375 2 12t.15-.738q.15-.362.45-.662L5.2 8 1.375 4.2q-.3-.3-.288-.713.013-.412.313-.712t.713-.3q.412 0 .712.3l18.375 18.4q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3ZM14.6 17.4l-8-8L4 12l8 8Zm4.25-1.45-1.4-1.4L20 12l-8-8-2.55 2.55-1.4-1.4L10.6 2.6q.3-.3.662-.45Q11.625 2 12 2t.738.15q.362.15.662.45l8 8q.3.3.45.662.15.363.15.738t-.15.738q-.15.362-.45.662Zm-5.4-5.4ZM10.6 13.4ZM8 14v-3q0-.425.288-.713Q8.575 10 9 10h1.025l2 2H10v2q0 .425-.287.712Q9.425 15 9 15t-.712-.288Q8 14.425 8 14Zm7.45-1.45.85-.85q.3-.3.3-.7 0-.4-.3-.7l-1.95-1.95q-.25-.25-.55-.125-.3.125-.3.475V10h-.6Z"/>
    </Icon>
  );
});

IconMaterialDirectionsOff.displayName = 'AmauiIconMaterialDirectionsOff';

export default IconMaterialDirectionsOff;
