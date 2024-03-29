import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestEcoLeaf = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestEcoLeaf'

      short_name='NestEcoLeaf'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.9q-1.4 0-2.637-.438-1.238-.437-2.263-1.237L5.7 19.6q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l1.375-1.375q-.8-1.025-1.237-2.275Q4 13.3 4 11.9q0-3.35 2.325-5.675Q8.65 3.9 12 3.9h8v8q0 3.35-2.325 5.675Q15.35 19.9 12 19.9Zm0-2q2.5 0 4.25-1.75T18 11.9v-6h-6q-2.5 0-4.25 1.75T6 11.9q0 .975.3 1.862.3.888.825 1.613L12.3 10.2q.275-.275.7-.275.425 0 .7.275.3.3.3.712 0 .413-.3.713L8.525 16.8q.725.525 1.612.812.888.288 1.863.288Z"/>
    </Icon>
  );
});

IconMaterialNestEcoLeaf.displayName = 'AmauiIconMaterialNestEcoLeaf';

export default IconMaterialNestEcoLeaf;
