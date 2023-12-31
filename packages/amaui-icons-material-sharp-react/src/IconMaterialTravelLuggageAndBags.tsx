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
      <path d="M280-80v-40h-80v-600h160v-160h240v160h160v600h-80v40h-80v-40H360v40h-80Zm160-640h80v-80h-80v80Zm40 240q53 0 103.5-13.5T680-534v-106H280v106q46 27 96.5 40.5T480-480Zm-40 120v-42q-42-5-82-15t-78-27v244h400v-244q-38 17-78 27t-82 15v42h-80Zm40 0Zm0-120Zm0 36Z"/>
    </Icon>
  );
});

IconMaterialTravelLuggageAndBags.displayName = 'AmauiIconMaterialTravelLuggageAndBags';

export default IconMaterialTravelLuggageAndBags;
