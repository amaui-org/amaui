import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTacticW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TacticW100Filled'

      short_name='Tactic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m705-235-55 54q-4 4-9.5 3.5T631-182q-4-4-4-9t4-9l54-55-54-54q-4-4-4-9.5t4-9.5q4-5 10-4.5t10 4.5l54 54 53-54q4-4 10-4t10 4q5 5 5 10t-5 10l-54 53 54 54q4 4 4.5 10t-4.5 10q-4 4-10 3.5t-10-4.5l-53-53Zm-439 35q27 0 46.5-19.5T332-266q0-27-19.5-46.5T266-332q-27 0-46.5 19.5T200-266q0 27 19.5 46.5T266-200Zm0 28q-39 0-66.5-27.5T172-266q0-39 27.5-66.5T266-360q35 0 61.5 22.5T359-280q49-2 83-37t34-83v-145q0-72 51-123t123-51h84l-79-79q-4-4-4.5-9.5T655-818q5-5 10-5t10 5l92 92q9 9 9 21t-9 21l-93 93q-4 4-9 4t-10-4q-5-4-4.5-9.5T655-611l78-80h-83q-61 0-103.5 42.5T504-545v145q0 60-42.5 102.5T359-252q-5 35-31.5 57.5T266-172Zm-11-513-55 54q-4 4-9.5 3.5T181-632q-4-4-4-9t4-9l54-55-54-54q-4-4-4-9.5t4-9.5q4-5 10-4.5t10 4.5l54 54 53-54q4-4 10-4t10 4q5 5 5 10t-5 10l-54 53 54 54q4 4 4.5 10t-4.5 10q-4 4-10 3.5t-10-4.5l-53-53Z"/>
    </Icon>
  );
});

IconMaterialTacticW100Filled.displayName = 'AmauiIconMaterialTacticW100Filled';

export default IconMaterialTacticW100Filled;
