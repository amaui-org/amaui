import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBuildCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BuildCircleFilled'

      short_name='BuildCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.525 10.925-2.35-2.35q-.2.4-.312.825-.113.425-.113.85 0 1.425 1.013 2.438Q8.775 13.7 10.2 13.7q.325 0 .612-.05.288-.05.563-.15l3.775 3.75 2.1-2.1-3.75-3.775q.1-.225.15-.513.05-.287.05-.662 0-1.425-1.012-2.438Q11.675 6.75 10.25 6.75q-.425 0-.85.112-.425.113-.825.313l2.35 2.35ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialBuildCircleFilled.displayName = 'AmauiIconMaterialBuildCircleFilled';

export default IconMaterialBuildCircleFilled;
