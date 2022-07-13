const permissions = localStorage.getItem("permissions");

export const handlePermissions = () => {
    let resultPermissions = JSON.parse(permissions).map((data) => {
        let splitName = data.name.split(":");
        let actions = splitName[0]
        let subject = splitName[1]
        return actions + "_" + subject
    })
    resultPermissions.push('get_dashboard')
    if (resultPermissions.includes('get_master-branch') || resultPermissions.includes('get_master-city') || resultPermissions.includes('get_master-sales')) {
        resultPermissions.push('get_branches')
    }
    if (resultPermissions.includes('get_user') || resultPermissions.includes('get_role') || resultPermissions.includes('get_cms-user-logs')) {
        resultPermissions.push('get_account')
    }
    return resultPermissions
}