import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeSpeakerRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeSpeakerRoundedW100'
      short_name='HomeSpeaker'

      {...props}
    >
      <path d="M10.075 18.625Q8.8 18.625 7.975 17.688Q7.15 16.75 7.325 15.5L8.425 7.25Q8.45 7.175 8.488 7.113Q8.525 7.05 8.625 7L14.975 4.475Q15.125 4.425 15.262 4.5Q15.4 4.575 15.425 4.75L16.725 15.55Q16.85 16.775 16.062 17.7Q15.275 18.625 14 18.625ZM8.45 12.325H15.625L14.775 5.275L9.125 7.575ZM10.075 17.925H14Q14.95 17.925 15.55 17.238Q16.15 16.55 16.025 15.625L15.725 13.025H8.375L8.025 15.6Q7.9 16.475 8.538 17.2Q9.175 17.925 10.075 17.925Z"/>
    </Icon>
  );
});

IconMaterialHomeSpeakerRoundedW100.displayName = 'AmauiIconMaterialHomeSpeakerRoundedW100';

export default IconMaterialHomeSpeakerRoundedW100;
