import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeakerPhoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerPhoneW100'

      short_name='SpeakerPhone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.45 8.5-.5-.5q.825-.825 1.875-1.262Q10.875 6.3 12 6.3q1.125 0 2.175.438 1.05.437 1.875 1.262l-.5.5q-.725-.725-1.625-1.113Q13.025 7 12 7t-1.925.387q-.9.388-1.625 1.113Zm-2.8-2.9-.5-.5Q6.5 3.75 8.288 3.025 10.075 2.3 12 2.3q1.925 0 3.713.725Q17.5 3.75 18.85 5.1l-.5.5q-1.275-1.25-2.925-1.925T12 3q-1.775 0-3.425.675T5.65 5.6ZM9 21V11h6v10Zm.7-.7h4.6v-8.6H9.7Zm0 0h4.6Z"/>
    </Icon>
  );
});

IconMaterialSpeakerPhoneW100.displayName = 'AmauiIconMaterialSpeakerPhoneW100';

export default IconMaterialSpeakerPhoneW100;
