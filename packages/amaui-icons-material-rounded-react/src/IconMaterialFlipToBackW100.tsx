import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlipToBackW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipToBackW100'

      short_name='FlipToBack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 9V7H9v2Zm0 4v-2H9v2Zm0-8q0-.3.2-.5t.5-.2V5ZM11 15.7V15h2v.7ZM19 5v-.7q.3 0 .5.2t.2.5Zm-8 0v-.7h2V5ZM9 15.7q-.35 0-.525-.175Q8.3 15.35 8.3 15H9ZM19 13v-2h.7v2Zm0-4V7h.7v2Zm0 6.7V15h.7q0 .3-.2.5t-.5.2Zm-13.2 4q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V7.35q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V18.2q0 .3.25.55.25.25.55.25h10.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM15 5v-.7h2V5Zm0 10.7V15h2v.7Z"/>
    </Icon>
  );
});

IconMaterialFlipToBackW100.displayName = 'AmauiIconMaterialFlipToBackW100';

export default IconMaterialFlipToBackW100;
