import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssistantOnHub = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantOnHub'

      short_name='AssistantOnHub'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M413 576q17 0 28.5-11.5T453 536q0-17-11.5-28.5T413 496q-17 0-28.5 11.5T373 536q0 17 11.5 28.5T413 576Zm-133 0q17 0 28.5-11.5T320 536q0-17-11.5-28.5T280 496q-17 0-28.5 11.5T240 536q0 17 11.5 28.5T280 576Zm267 0q17 0 28.5-11.5T587 536q0-17-11.5-28.5T547 496q-17 0-28.5 11.5T507 536q0 17 11.5 28.5T547 576Zm133 0q17 0 28.5-11.5T720 536q0-17-11.5-28.5T680 496q-17 0-28.5 11.5T640 536q0 17 11.5 28.5T680 576ZM160 736h640V336H160v400Zm320 160q-99 0-169.5-13.5T240 850v-34H80V256h800v560H720v34q0 19-70.5 32.5T480 896ZM160 736V336v400Z"/>
    </Icon>
  );
});

IconMaterialAssistantOnHub.displayName = 'AmauiIconMaterialAssistantOnHub';

export default IconMaterialAssistantOnHub;
