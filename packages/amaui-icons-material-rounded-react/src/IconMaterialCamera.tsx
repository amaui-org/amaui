import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCamera = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Camera'

      short_name='Camera'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.275 9H19.4q-.675-1.725-2.062-2.963Q15.95 4.8 14.15 4.3l-2.3 3.95q-.15.25 0 .5t.425.25Zm-3.6 1.25q.15.25.425.25t.425-.25L13.1 4.1q-.275-.05-.55-.075Q12.275 4 12 4q-1.65 0-3.075.625Q7.5 5.25 6.4 6.3ZM4.25 14h4.575q.275 0 .437-.25.163-.25.013-.5L5.7 7.1q-.8 1.025-1.25 2.263Q4 10.6 4 12q0 .525.062 1.012.063.488.188.988Zm5.6 5.7 2.275-3.95q.15-.25-.012-.5-.163-.25-.438-.25H4.6q.675 1.725 2.063 2.962Q8.05 19.2 9.85 19.7ZM12 20q1.65 0 3.075-.625Q16.5 18.75 17.6 17.7l-2.275-3.95q-.15-.25-.425-.25t-.425.25L10.9 19.9q.275.05.538.075Q11.7 20 12 20Zm6.3-3.1q.8-1.025 1.25-2.263Q20 13.4 20 12q0-.525-.062-1.012-.063-.488-.188-.988h-4.575q-.275 0-.437.25-.163.25-.013.5ZM12 12Zm0 10q-2.05 0-3.875-.788-1.825-.787-3.187-2.15-1.363-1.362-2.15-3.187Q2 14.05 2 12q0-2.075.788-3.887.787-1.813 2.15-3.175Q6.3 3.575 8.125 2.787 9.95 2 12 2q2.075 0 3.887.787 1.813.788 3.175 2.151 1.363 1.362 2.15 3.175Q22 9.925 22 12q0 2.05-.788 3.875-.787 1.825-2.15 3.187-1.362 1.363-3.175 2.15Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialCamera.displayName = 'AmauiIconMaterialCamera';

export default IconMaterialCamera;
