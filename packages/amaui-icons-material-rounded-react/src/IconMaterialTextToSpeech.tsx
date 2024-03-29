import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextToSpeech = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextToSpeech'

      short_name='TextToSpeech'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22q-.825 0-1.412-.587Q2 20.825 2 20V4q0-.825.588-1.413Q3.175 2 4 2h9l-2 2H4v16h11v-3h2v3q0 .825-.587 1.413Q15.825 22 15 22Zm2-4v-2h7v2Zm0-3v-2h5v2Zm9 0-4-4H8V6h3l4-4Zm2-3.05v-6.9q.9.525 1.45 1.425.55.9.55 2.025t-.55 2.025q-.55.9-1.45 1.425Zm0 4.3v-2.1q1.75-.625 2.875-2.163Q21 10.45 21 8.5q0-1.95-1.125-3.488Q18.75 3.475 17 2.85V.75q2.6.675 4.3 2.812Q23 5.7 23 8.5t-1.7 4.938q-1.7 2.137-4.3 2.812Z"/>
    </Icon>
  );
});

IconMaterialTextToSpeech.displayName = 'AmauiIconMaterialTextToSpeech';

export default IconMaterialTextToSpeech;
