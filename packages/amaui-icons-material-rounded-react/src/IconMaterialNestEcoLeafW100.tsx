import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestEcoLeafW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestEcoLeafW100'

      short_name='NestEcoLeaf'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.6q-1.3 0-2.438-.462-1.137-.463-2.037-1.263L5.25 19.15q-.1.1-.25.1t-.25-.1q-.1-.1-.1-.25t.1-.25l2.275-2.25q-.8-.9-1.262-2.05Q5.3 13.2 5.3 11.9q0-2.8 1.95-4.75Q9.2 5.2 12 5.2h6.7v6.7q0 2.8-1.95 4.75Q14.8 18.6 12 18.6Zm0-.7q2.5 0 4.25-1.75T18 11.9v-6h-6q-2.5 0-4.25 1.75T6 11.9q0 1.15.4 2.175T7.525 15.9l5.225-5.25q.1-.1.25-.1t.25.1q.125.125.125.262 0 .138-.125.263L8 16.375q.8.725 1.825 1.125t2.175.4Z"/>
    </Icon>
  );
});

IconMaterialNestEcoLeafW100.displayName = 'AmauiIconMaterialNestEcoLeafW100';

export default IconMaterialNestEcoLeafW100;
