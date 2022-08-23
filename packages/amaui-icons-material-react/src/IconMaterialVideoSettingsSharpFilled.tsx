import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoSettingsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoSettingsSharpFilled'
      short_name='VideoSettings'

      {...props}
    >
      <path d="M2 20V4H22V11H20V6H4V18H12V20ZM9.5 16.5V7.5L16.5 12ZM17.85 23 17.55 21.5Q17.25 21.375 16.988 21.238Q16.725 21.1 16.45 20.9L15 21.35L14 19.65L15.15 18.65Q15.1 18.3 15.1 18Q15.1 17.7 15.15 17.35L14 16.35L15 14.65L16.45 15.1Q16.725 14.9 16.988 14.762Q17.25 14.625 17.55 14.5L17.85 13H19.85L20.15 14.5Q20.45 14.625 20.713 14.775Q20.975 14.925 21.25 15.15L22.7 14.65L23.7 16.4L22.55 17.4Q22.6 17.7 22.6 18.025Q22.6 18.35 22.55 18.65L23.7 19.65L22.7 21.35L21.25 20.9Q20.975 21.1 20.713 21.238Q20.45 21.375 20.15 21.5L19.85 23ZM18.85 20Q19.675 20 20.263 19.413Q20.85 18.825 20.85 18Q20.85 17.175 20.263 16.587Q19.675 16 18.85 16Q18.025 16 17.438 16.587Q16.85 17.175 16.85 18Q16.85 18.825 17.438 19.413Q18.025 20 18.85 20Z"/>
    </Icon>
  );
});

IconMaterialVideoSettingsSharpFilled.displayName = 'AmauiIconMaterialVideoSettingsSharpFilled';

export default IconMaterialVideoSettingsSharpFilled;
