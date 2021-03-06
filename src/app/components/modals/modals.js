import DefinitionCreator from "./definitionCreator/definitionCreator";
import DefinitionEditor from "./definitionEditor/definitionEditor";
import PathCreator from "./pathCreator/pathCreator";
import ParameterEditor from "./parameterEditor/parameterEditor";
import ResponseEditor from "./responseEditor/responseEditor";

export default angular
    .module("modals", [
        DefinitionCreator.name,
        DefinitionEditor.name,
        PathCreator.name,
        ParameterEditor.name,
        ResponseEditor.name
    ]);

// export default ModalsModule;
