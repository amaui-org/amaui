import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactlessFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactlessFilled'

      short_name='Contactless'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.4 14.65q.225-.6.362-1.263Q8.9 12.725 8.9 12t-.138-1.388Q8.625 9.95 8.4 9.35l-1.85.75q.15.45.25.925.1.475.1.975t-.1.975q-.1.475-.25.925ZM11.6 16q.425-.95.613-1.95.187-1 .187-2.05 0-1.05-.187-2.05-.188-1-.613-1.95l-1.85.75q.35.75.5 1.562.15.813.15 1.688t-.15 1.688q-.15.812-.5 1.562Zm3.25 1.35q.525-1.25.787-2.588.263-1.337.263-2.762t-.263-2.763Q15.375 7.9 14.85 6.65l-1.85.8q.45 1.05.675 2.2.225 1.15.225 2.35 0 1.2-.225 2.35-.225 1.15-.675 2.2ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialContactlessFilled.displayName = 'AmauiIconMaterialContactlessFilled';

export default IconMaterialContactlessFilled;
