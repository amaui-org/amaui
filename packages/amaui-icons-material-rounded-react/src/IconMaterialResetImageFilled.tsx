import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetImageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetImageFilled'

      short_name='ResetImage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 9H4q-.425 0-.712-.288Q3 8.425 3 8V4q0-.425.288-.713Q3.575 3 4 3t.713.287Q5 3.575 5 4v2.35Q6.25 4.8 8.062 3.9 9.875 3 12 3q2.75 0 4.938 1.463 2.187 1.462 3.262 3.812.125.275-.138.5Q19.8 9 19.4 9q-.425 0-.813-.137-.387-.138-.587-.488-.925-1.525-2.5-2.45Q13.925 5 12 5q-1.425 0-2.688.525Q8.05 6.05 7.1 7H8q.425 0 .713.287Q9 7.575 9 8t-.287.712Q8.425 9 8 9Zm-1 9h10q.3 0 .45-.275.15-.275-.05-.525l-2.75-3.675q-.15-.2-.4-.2t-.4.2L11.25 17 9.4 14.525q-.15-.2-.4-.2t-.4.2l-2 2.675q-.2.25-.05.525Q6.7 18 7 18Zm-2 4q-.825 0-1.413-.587Q3 20.825 3 20v-7q0-.425.288-.713Q3.575 12 4 12t.713.287Q5 12.575 5 13v7h14v-7q0-.425.288-.713Q19.575 12 20 12t.712.287Q21 12.575 21 13v7q0 .825-.587 1.413Q19.825 22 19 22Z"/>
    </Icon>
  );
});

IconMaterialResetImageFilled.displayName = 'AmauiIconMaterialResetImageFilled';

export default IconMaterialResetImageFilled;
