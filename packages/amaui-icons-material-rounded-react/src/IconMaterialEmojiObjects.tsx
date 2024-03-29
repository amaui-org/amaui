import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmojiObjects = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiObjects'

      short_name='EmojiObjects'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-.65 0-1.175-.312-.525-.313-.825-.838-.825 0-1.412-.587Q8 19.675 8 18.85V15.3q-1.475-.975-2.362-2.575-.888-1.6-.888-3.475 0-3.025 2.112-5.138Q8.975 2 12 2t5.137 2.112Q19.25 6.225 19.25 9.25q0 1.925-.887 3.5-.888 1.575-2.363 2.55v3.55q0 .825-.587 1.413-.588.587-1.413.587-.3.525-.825.838Q12.65 22 12 22Zm-2-3.15h4v-.9h-4Zm0-1.9h4V16h-4ZM9.8 14h1.45v-2.7l-1.7-1.7q-.2-.2-.2-.5t.225-.525q.225-.225.525-.225.3 0 .525.225L12 9.95l1.4-1.4q.2-.2.5-.2t.525.225q.225.225.225.525 0 .3-.225.525L12.75 11.3V14h1.45q1.35-.65 2.2-1.913.85-1.262.85-2.837 0-2.2-1.525-3.725T12 4Q9.8 4 8.275 5.525T6.75 9.25q0 1.575.85 2.837Q8.45 13.35 9.8 14ZM12 9.95ZM12 9Z"/>
    </Icon>
  );
});

IconMaterialEmojiObjects.displayName = 'AmauiIconMaterialEmojiObjects';

export default IconMaterialEmojiObjects;
