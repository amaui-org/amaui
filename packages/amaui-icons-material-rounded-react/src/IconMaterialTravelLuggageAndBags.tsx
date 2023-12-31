import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTravelLuggageAndBags = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TravelLuggageAndBags'

      short_name='TravelLuggageAndBags'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200v-440q0-33 23.5-56.5T280-720h80v-120q0-17 11.5-28.5T400-880h160q17 0 28.5 11.5T600-840v120h80q33 0 56.5 23.5T760-640v440q0 33-23.5 56.5T680-120q0 17-11.5 28.5T640-80q-16 0-22.5-14.5T600-120H360q0 17-11.5 28.5T320-80q-16 0-22.5-14.5T280-120q-33 0-56.5-23.5T200-200Zm240-520h80v-80h-80v80Zm40 240q53 0 103.5-13.5T680-534v-106H280v106q46 27 96.5 40.5T480-480Zm-40 80v-2q-42-5-82-15t-78-27v244h400v-244q-38 17-78 27t-82 15v2q0 17-11.5 28.5T480-360q-17 0-28.5-11.5T440-400Zm40 40Zm0-120Zm0 36Z"/>
    </Icon>
  );
});

IconMaterialTravelLuggageAndBags.displayName = 'AmauiIconMaterialTravelLuggageAndBags';

export default IconMaterialTravelLuggageAndBags;
