import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPublishW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublishW100'

      short_name='Publish'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.7q-.15 0-.25-.1t-.1-.25V9.9l-2 2q-.1.1-.237.112-.138.013-.263-.112t-.125-.25q0-.125.125-.25l2.325-2.325q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175L14.85 11.4q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125l-2-2v8.45q0 .15-.1.25t-.25.1ZM5.65 8.55q-.15 0-.25-.1t-.1-.25V6.35q0-.65.425-1.075Q6.15 4.85 6.8 4.85h10.4q.65 0 1.075.425.425.425.425 1.075V8.2q0 .15-.1.25t-.25.1q-.15 0-.25-.1T18 8.2V6.35q0-.3-.25-.55-.25-.25-.55-.25H6.8q-.3 0-.55.25-.25.25-.25.55V8.2q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialPublishW100.displayName = 'AmauiIconMaterialPublishW100';

export default IconMaterialPublishW100;
