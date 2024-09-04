import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFaceLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaceLeftW100Filled'

      short_name='FaceLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M348.53-499Q336-499 327-507.68q-9-8.67-9-21.5 0-12.82 8.91-21.32 8.92-8.5 22.09-8.5 12.33 0 20.66 8.68 8.34 8.67 8.34 21.5 0 12.82-8.47 21.32-8.48 8.5-21 8.5Zm182.29 0q-12.82 0-21.32-8.68-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5ZM344-329q-60-35-96-96t-36-135q0-112.22 77.84-190.11 77.84-77.89 190-77.89T670-750.11q78 77.89 78 190.11 0 74-36 135t-96 96l-21-20q57-31 91.5-87T720-561v-3q-60-20-106-62.5T543-727q-44 53-105.5 82T307-618q-14 0-28.5-1.5T250-624q-5 16-7.5 31.48Q240-577.03 240-560q0 68.67 34.5 124.34Q309-380 365-349l-21 20ZM475-71 351-195l124-123 19 20-89 89h204v28H405l89 90-19 20Z"/>
    </Icon>
  );
});

IconMaterialFaceLeftW100Filled.displayName = 'AmauiIconMaterialFaceLeftW100Filled';

export default IconMaterialFaceLeftW100Filled;
