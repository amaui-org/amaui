import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQueuePlayNextW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueuePlayNextW100'

      short_name='QueuePlayNext'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.1 21.25q-.125-.125-.125-.25t.125-.25L21.85 18l-2.75-2.75q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l2.725 2.725q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25L19.6 21.25q-.1.1-.237.113-.138.012-.263-.113ZM9.25 19.7q-.325 0-.537-.213-.213-.212-.213-.537V17.7H4.65q-.65 0-1.075-.425-.425-.425-.425-1.075V5.8q0-.65.425-1.075Q4 4.3 4.65 4.3h14.4q.65 0 1.075.425.425.425.425 1.075v5.85q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V5.8q0-.35-.225-.575Q19.4 5 19.05 5H4.65q-.35 0-.575.225-.225.225-.225.575v10.4q0 .35.225.575Q4.3 17 4.65 17H16.5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-2.3v1.25q0 .325-.212.537-.213.213-.538.213Zm2.6-5.35q.15 0 .25-.1t.1-.25v-2.65h2.65q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H12.2V8q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.65H8.85q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h2.65V14q0 .15.1.25t.25.1Zm0-3.35Z"/>
    </Icon>
  );
});

IconMaterialQueuePlayNextW100.displayName = 'AmauiIconMaterialQueuePlayNextW100';

export default IconMaterialQueuePlayNextW100;
