import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTravelLuggageAndBagsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TravelLuggageAndBagsFilled'

      short_name='TravelLuggageAndBags'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-720h80v-80h-80v80Zm40 240q-76 0-145-31.5T200-582v-58q0-33 23.5-56.5T280-720h80v-120q0-17 11.5-28.5T400-880h160q17 0 28.5 11.5T600-840v120h80q33 0 56.5 23.5T760-640v58q-66 39-135 70.5T480-480ZM280-120q-33 0-56.5-23.5T200-200v-292q56 34 115.5 58T440-402v2q0 17 11.5 28.5T480-360q17 0 28.5-11.5T520-400v-2q65-8 124.5-32T760-492v292q0 33-23.5 56.5T680-120q0 17-11.5 28.5T640-80q-16 0-22.5-14.5T600-120H360q0 17-11.5 28.5T320-80q-16 0-22.5-14.5T280-120Z"/>
    </Icon>
  );
});

IconMaterialTravelLuggageAndBagsFilled.displayName = 'AmauiIconMaterialTravelLuggageAndBagsFilled';

export default IconMaterialTravelLuggageAndBagsFilled;
