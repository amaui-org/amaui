import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMotionPhotosAutoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionPhotosAutoW100'

      short_name='MotionPhotosAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.05 15.05h.75l.75-2.05h2.9l.75 2.05h.8L12.35 8h-.7Zm1.7-2.75 1.2-3.3h.1l1.2 3.3ZM12 20.7q-1.8 0-3.387-.675-1.588-.675-2.763-1.85Q4.675 17 3.987 15.425 3.3 13.85 3.3 12.05q0-.85.15-1.675.15-.825.45-1.625l.55.55q-.225.65-.337 1.325Q4 11.3 4 12q0 3.35 2.325 5.675Q8.65 20 12 20q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4q-.675 0-1.337.112-.663.113-1.313.338L8.8 3.9q.725-.275 1.488-.438.762-.162 1.562-.162 1.825 0 3.438.675Q16.9 4.65 18.1 5.837q1.2 1.188 1.9 2.775.7 1.588.7 3.388 0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7ZM6.05 6.75q-.275 0-.488-.213-.212-.212-.212-.487t.212-.488q.213-.212.488-.212t.487.212q.213.213.213.488t-.213.487q-.212.213-.487.213ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialMotionPhotosAutoW100.displayName = 'AmauiIconMaterialMotionPhotosAutoW100';

export default IconMaterialMotionPhotosAutoW100;
