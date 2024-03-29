import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRebaseEdit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RebaseEdit'

      short_name='RebaseEdit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.75 9.25-1.4-1.425L11.175 6h-3.35q-.225.65-.7 1.125T6 7.825v8.35q.875.325 1.438 1.087Q8 18.025 8 19q0 1.25-.875 2.125T5 22q-1.25 0-2.125-.875T2 19q0-.975.562-1.738Q3.125 16.5 4 16.175v-8.35Q3.125 7.5 2.562 6.737 2 5.975 2 5q0-1.25.875-2.125T5 2q.975 0 1.738.562Q7.5 3.125 7.825 4h3.35L9.35 2.175 10.75.75 15 5ZM19 2q1.25 0 2.125.875T22 5q0 1.25-.875 2.125T19 8q-1.25 0-2.125-.875T16 5q0-1.25.875-2.125T19 2ZM5 20q.425 0 .713-.288Q6 19.425 6 19t-.287-.712Q5.425 18 5 18t-.713.288Q4 18.575 4 19t.287.712Q4.575 20 5 20ZM5 6q.425 0 .713-.287Q6 5.425 6 5t-.287-.713Q5.425 4 5 4t-.713.287Q4 4.575 4 5t.287.713Q4.575 6 5 6Zm14 0q.425 0 .712-.287Q20 5.425 20 5t-.288-.713Q19.425 4 19 4t-.712.287Q18 4.575 18 5t.288.713Q18.575 6 19 6ZM5 19ZM5 5Zm14 0Zm-3.45 7.2 1.425 1.4L12 18.575V20h1.4l5-5 1.425 1.4L14.25 22H10v-4.25Zm4.275 4.2-4.275-4.2 3.075-3.075 4.2 4.275Z"/>
    </Icon>
  );
});

IconMaterialRebaseEdit.displayName = 'AmauiIconMaterialRebaseEdit';

export default IconMaterialRebaseEdit;
