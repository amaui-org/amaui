import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModelTraining = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModelTraining'

      short_name='ModelTraining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.15 18.85q-1.025-1.2-1.588-2.688Q3 14.675 3 13q0-3.75 2.625-6.375T12 4h.2l-1.6-1.6L12 1l4 4-4 4-1.425-1.425L12.15 6H12Q9.1 6 7.05 8.05 5 10.1 5 13q0 1.275.412 2.4.413 1.125 1.163 2.025ZM11 18.5q0-.575-.387-1.137-.388-.563-.863-1.175-.475-.613-.863-1.276Q8.5 14.25 8.5 13.5q0-1.45 1.025-2.475Q10.55 10 12 10q1.45 0 2.475 1.025Q15.5 12.05 15.5 13.5q0 .75-.387 1.412-.388.663-.863 1.276-.475.612-.863 1.175Q13 17.925 13 18.5Zm0 2.5v-1.5h2V21Zm7.85-2.15-1.425-1.425q.75-.9 1.162-2.025Q19 14.275 19 13q0-1.65-.688-3.062-.687-1.413-1.887-2.363L17.85 6.15q1.45 1.25 2.3 3.012Q21 10.925 21 13q0 1.675-.562 3.162-.563 1.488-1.588 2.688Z"/>
    </Icon>
  );
});

IconMaterialModelTraining.displayName = 'AmauiIconMaterialModelTraining';

export default IconMaterialModelTraining;
