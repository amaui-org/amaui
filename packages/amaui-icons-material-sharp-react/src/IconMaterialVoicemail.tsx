import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVoicemail = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Voicemail'

      short_name='Voicemail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 16q-1.875 0-3.188-1.312Q2 13.375 2 11.5q0-1.875 1.312-3.188Q4.625 7 6.5 7q1.875 0 3.188 1.312Q11 9.625 11 11.5q0 .675-.2 1.3t-.55 1.2h3.5q-.35-.575-.55-1.2-.2-.625-.2-1.3 0-1.875 1.312-3.188Q15.625 7 17.5 7q1.875 0 3.188 1.312Q22 9.625 22 11.5q0 1.875-1.312 3.188Q19.375 16 17.5 16Zm0-2q1.05 0 1.775-.725Q9 12.55 9 11.5q0-1.05-.725-1.775Q7.55 9 6.5 9q-1.05 0-1.775.725Q4 10.45 4 11.5q0 1.05.725 1.775Q5.45 14 6.5 14Zm11 0q1.05 0 1.775-.725Q20 12.55 20 11.5q0-1.05-.725-1.775Q18.55 9 17.5 9q-1.05 0-1.775.725Q15 10.45 15 11.5q0 1.05.725 1.775Q16.45 14 17.5 14Zm-11-2.5Zm11 0Z"/>
    </Icon>
  );
});

IconMaterialVoicemail.displayName = 'AmauiIconMaterialVoicemail';

export default IconMaterialVoicemail;
