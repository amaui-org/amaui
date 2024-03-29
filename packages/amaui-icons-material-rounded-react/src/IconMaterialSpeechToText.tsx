import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeechToText = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeechToText'

      short_name='SpeechToText'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 10q-.825 0-1.412-.575Q15 8.85 15 8V4q0-.85.588-1.425Q16.175 2 17 2q.85 0 1.425.575Q19 3.15 19 4v4q0 .85-.575 1.425Q17.85 10 17 10ZM5 22q-.825 0-1.413-.587Q3 20.825 3 20V4q0-.825.587-1.413Q4.175 2 5 2h8v2H5v16h11v-2h2v2q0 .825-.587 1.413Q16.825 22 16 22Zm2-4v-2h7v2Zm0-3v-2h5v2Zm11 1h-2v-2.6q-1.925-.35-3.212-1.863Q11.5 10.025 11.5 8h2q0 1.45 1.025 2.475Q15.55 11.5 17 11.5q1.475 0 2.488-1.025Q20.5 9.45 20.5 8h2q0 2.025-1.275 3.537Q19.95 13.05 18 13.4Z"/>
    </Icon>
  );
});

IconMaterialSpeechToText.displayName = 'AmauiIconMaterialSpeechToText';

export default IconMaterialSpeechToText;
