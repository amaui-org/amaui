import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeakerPhone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerPhone'

      short_name='SpeakerPhone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.45 8.5 7 7.05q1.025-.975 2.312-1.513Q10.6 5 12 5q1.4 0 2.688.537Q15.975 6.075 17 7.05L15.55 8.5q-.725-.725-1.625-1.113Q13.025 7 12 7t-1.925.387q-.9.388-1.625 1.113Zm-2.8-2.9-1.4-1.4q1.575-1.55 3.562-2.375Q9.8 1 12 1q2.2 0 4.188.825 1.987.825 3.562 2.375l-1.4 1.4q-1.275-1.25-2.925-1.925T12 3q-1.775 0-3.425.675T5.65 5.6ZM8 22V10h8v12Zm2-2h4v-8h-4Zm0 0h4Z"/>
    </Icon>
  );
});

IconMaterialSpeakerPhone.displayName = 'AmauiIconMaterialSpeakerPhone';

export default IconMaterialSpeakerPhone;
