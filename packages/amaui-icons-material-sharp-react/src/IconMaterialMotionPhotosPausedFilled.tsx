import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMotionPhotosPausedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionPhotosPausedFilled'

      short_name='MotionPhotosPaused'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 15h2V9H9Zm4 0h2V9h-2Zm-1 7q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-1.075.225-2.113.225-1.037.65-2.012l1.55 1.55q-.2.65-.312 1.287Q4 11.35 4 12q0 3.35 2.325 5.675Q8.65 20 12 20q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4q-.675 0-1.312.112-.638.113-1.263.313L7.9 2.9q1-.45 2-.675Q10.9 2 12 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22ZM5.5 7q-.625 0-1.062-.438Q4 6.125 4 5.5t.438-1.062Q4.875 4 5.5 4t1.062.438Q7 4.875 7 5.5t-.438 1.062Q6.125 7 5.5 7Zm.5 5q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18q-2.5 0-4.25-1.75T6 12Z"/>
    </Icon>
  );
});

IconMaterialMotionPhotosPausedFilled.displayName = 'AmauiIconMaterialMotionPhotosPausedFilled';

export default IconMaterialMotionPhotosPausedFilled;
