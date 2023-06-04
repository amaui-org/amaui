import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLinkedCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkedCameraW100Filled'

      short_name='LinkedCamera'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.45 6.3q0-1.75-1.237-2.988-1.238-1.237-2.988-1.237-.15 0-.25-.113-.1-.112-.1-.262 0-.125.1-.238.1-.112.25-.112 2.05 0 3.5 1.45 1.45 1.45 1.45 3.5 0 .15-.113.25-.112.1-.237.1-.15 0-.263-.1-.112-.1-.112-.25ZM4.325 19.7q-.65 0-1.075-.425-.425-.425-.425-1.075V7.8q0-.65.425-1.075.425-.425 1.075-.425h2.9l1.4-1.525q.225-.225.512-.35.288-.125.588-.125h4.8q.15 0 .25.1t.1.25V5.7q.8 0 1.375.575t.575 1.375h3.05q.15 0 .25.1t.1.25v10.2q0 .65-.425 1.075-.425.425-1.075.425ZM17.8 6.3q0-.65-.463-1.113-.462-.462-1.112-.462-.15 0-.25-.113-.1-.112-.1-.237 0-.15.1-.25t.25-.1q.95 0 1.612.662.663.663.663 1.613 0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25Zm-6.275 10.2q1.475 0 2.487-1.012 1.013-1.013 1.013-2.488t-1.013-2.488Q13 9.5 11.525 9.5t-2.487 1.012Q8.025 11.525 8.025 13t1.013 2.488Q10.05 16.5 11.525 16.5Z"/>
    </Icon>
  );
});

IconMaterialLinkedCameraW100Filled.displayName = 'AmauiIconMaterialLinkedCameraW100Filled';

export default IconMaterialLinkedCameraW100Filled;
