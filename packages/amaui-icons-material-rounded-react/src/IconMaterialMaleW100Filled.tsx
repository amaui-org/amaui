import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMaleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaleW100Filled'

      short_name='Male'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 19.35q-2.025 0-3.438-1.412Q4.65 16.525 4.65 14.5q0-2.025 1.412-3.438Q7.475 9.65 9.5 9.65q.875 0 1.663.337.787.338 1.512.838L18.15 5.35H15q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.6q.325 0 .538.212.212.213.212.538V9q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V5.875L13.175 11.3q.5.725.838 1.525.337.8.337 1.675 0 2.025-1.412 3.438Q11.525 19.35 9.5 19.35Zm0-9q-1.725 0-2.938 1.212Q5.35 12.775 5.35 14.5t1.212 2.938Q7.775 18.65 9.5 18.65t2.938-1.212q1.212-1.213 1.212-2.938t-1.212-2.938Q11.225 10.35 9.5 10.35Z"/>
    </Icon>
  );
});

IconMaterialMaleW100Filled.displayName = 'AmauiIconMaterialMaleW100Filled';

export default IconMaterialMaleW100Filled;
