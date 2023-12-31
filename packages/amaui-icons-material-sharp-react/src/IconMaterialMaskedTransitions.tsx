import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMaskedTransitions = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaskedTransitions'

      short_name='MaskedTransitions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-80q-116 0-198-82T80-360q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198T360-80Zm0-80q83 0 141.5-58.5T560-360q0-83-58.5-141.5T360-560q-83 0-141.5 58.5T160-360q0 83 58.5 141.5T360-160Zm318-172q2-6 2-13v-15q0-133-93.5-226.5T360-680h-15q-7 0-13 2 26-88 98.5-145T600-880q116 0 198 82t82 198q0 97-57 169.5T678-332Z"/>
    </Icon>
  );
});

IconMaterialMaskedTransitions.displayName = 'AmauiIconMaterialMaskedTransitions';

export default IconMaterialMaskedTransitions;
