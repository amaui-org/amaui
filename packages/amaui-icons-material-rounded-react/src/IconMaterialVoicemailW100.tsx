import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVoicemailW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoicemailW100'

      short_name='Voicemail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 15q-1.45 0-2.475-1.025Q3.5 12.95 3.5 11.5q0-1.45 1.025-2.475Q5.55 8 7 8q1.45 0 2.475 1.025Q10.5 10.05 10.5 11.5q0 .85-.35 1.6-.35.75-1.05 1.2h5.8q-.7-.45-1.05-1.2-.35-.75-.35-1.6 0-1.45 1.025-2.475Q15.55 8 17 8q1.45 0 2.475 1.025Q20.5 10.05 20.5 11.5q0 1.45-1.025 2.475Q18.45 15 17 15Zm0-.7q1.175 0 1.988-.813.812-.812.812-1.987t-.812-1.988Q8.175 8.7 7 8.7t-1.987.812Q4.2 10.325 4.2 11.5t.813 1.987Q5.825 14.3 7 14.3Zm10 0q1.175 0 1.988-.813.812-.812.812-1.987t-.812-1.988Q18.175 8.7 17 8.7t-1.987.812q-.813.813-.813 1.988t.813 1.987q.812.813 1.987.813ZM7 11.5Zm10 0Z"/>
    </Icon>
  );
});

IconMaterialVoicemailW100.displayName = 'AmauiIconMaterialVoicemailW100';

export default IconMaterialVoicemailW100;
