import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlipCameraAndroidW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipCameraAndroidW100'

      short_name='FlipCameraAndroid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.35q-3.125 0-5.612-1.85Q3.9 17.65 3.05 14.65h.7q.85 2.725 3.125 4.362Q9.15 20.65 12 20.65q2.625 0 4.75-1.5t3.4-3.8h-3.5v-.7h4.7v4.7h-.7v-3.5q-1.35 2.425-3.612 3.962Q14.775 21.35 12 21.35Zm0-7.65q-.725 0-1.212-.488Q10.3 12.725 10.3 12t.488-1.213Q11.275 10.3 12 10.3t1.213.487q.487.488.487 1.213 0 .725-.487 1.212-.488.488-1.213.488ZM2.65 9.35v-4.7h.7v3.5Q4.7 5.725 6.963 4.187 9.225 2.65 12 2.65q3.125 0 5.613 1.85Q20.1 6.35 20.95 9.35h-.7q-.85-2.725-3.125-4.363Q14.85 3.35 12 3.35q-2.625 0-4.75 1.5t-3.4 3.8h3.5v.7Z"/>
    </Icon>
  );
});

IconMaterialFlipCameraAndroidW100.displayName = 'AmauiIconMaterialFlipCameraAndroidW100';

export default IconMaterialFlipCameraAndroidW100;
