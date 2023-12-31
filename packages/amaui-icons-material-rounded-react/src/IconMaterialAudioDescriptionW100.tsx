import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAudioDescriptionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AudioDescriptionW100'

      short_name='AudioDescription'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M778.422-311Q772-311 768-315.312q-4-4.313-4-10.688 0-3 1.167-6 1.166-3 2.833-5 28-28 44-64.521 16-36.522 16-78.5Q828-522 812-558.5T768-623q-2-1.848-3-4.804-1-2.957-1-5.913 0-6.283 4.073-10.783 4.073-4.5 10.094-4.5 2.833 0 5.5 1.167 2.666 1.166 4.333 2.833 32.172 32.096 50.086 74.404T856-480.144Q856-432 838.5-390 821-348 789-316q-1.889 1.923-4.722 3.462-2.834 1.538-5.856 1.538Zm-90.509-92Q682-403 678-407.073t-4-10.094q0-2.833 1.077-5.538 1.077-2.704 2.923-4.295 10-11 16-24.186T700-480q0-15.628-6-28.814T678-533q-1.846-1.702-2.923-4.596-1.077-2.893-1.077-5.617 0-5.787 4.163-10.287 4.164-4.5 10.061-4.5 2.776 0 5.276 1.346T698-553q14 14.462 22 33.196 8 18.734 8 39.769 0 21.035-8 39.794-8 18.76-22 33.241-1.739 1.846-4.348 2.923T687.913-403Zm-569.948 57Q112-346 108-350.025T104-360v-194q0-24.75 17.625-42.375T164-614h66q24.75 0 42.375 17.625T290-554v194q0 5.95-4.035 9.975-4.035 4.025-10 4.025T266-350.025q-4-4.025-4-9.975v-66H132v66q0 5.95-4.035 9.975-4.035 4.025-10 4.025ZM132-454h130v-100q0-14-9-23t-23-9h-66q-14 0-23 9t-9 23v100Zm272 108q-6.067 0-10.033-3.967Q390-353.933 390-360v-240q0-6.067 3.967-10.033Q397.933-614 404-614h114q24.75 0 42.375 17.625T578-554v148q0 24.75-17.625 42.375T518-346H404Zm14-28h100q14 0 23-9t9-23v-148q0-14-9-23t-23-9H418v212Z"/>
    </Icon>
  );
});

IconMaterialAudioDescriptionW100.displayName = 'AmauiIconMaterialAudioDescriptionW100';

export default IconMaterialAudioDescriptionW100;
